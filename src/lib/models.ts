import mongoose from "mongoose"; // Mongoose 라이브러리를 가져옵니다.

// 사용자 스키마를 정의합니다. 각 필드는 사용자 문서의 속성을 나타냅니다.
const userSchema = new mongoose.Schema({
  name: { type: String, required: true }, // 사용자 이름, 필수 항목
  email: { type: String, required: true }, // 이메일 주소, 필수 항목
  password: {
    type: String,
    select: false, // 기본적으로 쿼리에 선택되지 않도록 설정 (보안 목적으로)
  },
  role: {
    type: String,
    default: "user", // 기본값은 "user"
  },
  image: { type: String }, // 사용자 프로필 이미지 URL
  authProviderId: { type: String }, // 인증 제공자 ID (예: 소셜 로그인 ID)
});

// AuthUser 모델을 생성합니다. 이미 정의된 모델이 있으면 해당 모델을 사용하고,
// 없으면 새로운 모델을 생성합니다.
export const AuthUser =
  mongoose.models?.AuthUser || mongoose.model("AuthUser", userSchema);
