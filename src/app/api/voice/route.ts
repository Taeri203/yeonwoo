import { NextResponse } from "next/server";

type VoicePayload = {
  name?: string;
  phone?: string;
  residence?: string;
  category?: string;
  location?: string;
  title?: string;
  content?: string;
  reply?: boolean;
  website?: string;
  startedAt?: string;
};

const BREVO_ENDPOINT = "https://api.brevo.com/v3/smtp/email";
const MAX_FIELD_LENGTH = 120;
const MAX_CONTENT_LENGTH = 3000;

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as VoicePayload | null;

  if (!payload) {
    return NextResponse.json({ message: "요청 형식이 올바르지 않습니다." }, { status: 400 });
  }

  if (payload.website) {
    return NextResponse.json({ message: "접수되었습니다." });
  }

  const startedAt = Number(payload.startedAt);
  if (Number.isFinite(startedAt) && Date.now() - startedAt < 2500) {
    return NextResponse.json({ message: "잠시 후 다시 제출해 주세요." }, { status: 429 });
  }

  const name = clean(payload.name);
  const phone = clean(payload.phone);
  const residence = clean(payload.residence);
  const category = clean(payload.category);
  const location = clean(payload.location);
  const title = clean(payload.title);
  const content = clean(payload.content, MAX_CONTENT_LENGTH);
  const reply = payload.reply ? "희망" : "희망하지 않음";

  if (!name || !phone || !residence || !category || !title || content.length < 10) {
    return NextResponse.json({ message: "필수 항목을 확인해 주세요." }, { status: 400 });
  }

  const apiKey = process.env.BREVO_API_KEY;
  const toEmail = process.env.VOICE_TO_EMAIL;
  const fromEmail = process.env.VOICE_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    return NextResponse.json({ message: "접수 설정이 아직 완료되지 않았습니다." }, { status: 500 });
  }

  const submittedAt = new Intl.DateTimeFormat("ko-KR", {
    dateStyle: "long",
    timeStyle: "medium",
    timeZone: "Asia/Seoul",
  }).format(new Date());

  const response = await fetch(BREVO_ENDPOINT, {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      sender: { name: "정연우.kr 유권자의 소리", email: fromEmail },
      to: [{ email: toEmail }],
      subject: `[정연우.kr 유권자의 소리] ${title}`,
      htmlContent: renderEmail({
        name,
        phone,
        residence,
        category,
        location,
        title,
        content,
        reply,
        submittedAt,
      }),
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ message: "의견 접수 중 오류가 발생했습니다." }, { status: 502 });
  }

  return NextResponse.json({ message: "의견이 접수되었습니다." });
}

function clean(value: unknown, maxLength = MAX_FIELD_LENGTH) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
    .replaceAll("\n", "<br />");
}

function renderEmail(data: Record<string, string>) {
  const rows = [
    ["접수 시각", data.submittedAt],
    ["이름", data.name],
    ["연락처", data.phone],
    ["거주지", data.residence],
    ["분야", data.category],
    ["위치", data.location || "-"],
    ["답변 희망", data.reply],
    ["제목", data.title],
  ];

  return `
    <div style="font-family:Arial,'Apple SD Gothic Neo','Noto Sans KR',sans-serif;color:#101828;line-height:1.6">
      <h1 style="color:#11205A">정연우.kr 유권자의 소리</h1>
      <table style="width:100%;border-collapse:collapse;margin:20px 0">
        <tbody>
          ${rows
            .map(
              ([label, value]) => `
                <tr>
                  <th style="width:120px;text-align:left;background:#F8FAFC;border:1px solid #E5E7EB;padding:10px">${escapeHtml(label)}</th>
                  <td style="border:1px solid #E5E7EB;padding:10px">${escapeHtml(value)}</td>
                </tr>
              `,
            )
            .join("")}
        </tbody>
      </table>
      <h2 style="color:#11205A">내용</h2>
      <div style="white-space:normal;border:1px solid #E5E7EB;border-radius:16px;padding:16px;background:#fff">${escapeHtml(data.content)}</div>
    </div>
  `;
}
