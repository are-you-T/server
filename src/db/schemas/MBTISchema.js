import { Schema } from 'mongoose';

export default new Schema({
  // 16개 mbti 통계 데이터
  name: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    required: true,
    default: 0,
  },
  // 해당 mbti에 대한 특징 요약
  summary: {
    type: String,
    required: true,
  },
  // 해당 mbti에 대한 키워드
  tag: {
		type: Array,
    required: true
  },
  content: {
    // 해당 mbti에 대한 설명
    description: {
      type: String,
      required: true,
    },
    // 잘 맞는 mbti
    good: {
      // 잘 맞는 mbti 유형 1개
      name: {
        type: String,
        required: true,
      },
      // 이에 대한 설명 (왜 잘맞나요?)
      description: {
        type: String,
        required: true,
      },
    },
    bad: {
      // 잘 안맞는 mbti 유형 1개
      name: {
        type: String,
        required: true,
      },
      // 이에 대한 설명 (왜 잘 안맞나요?)
      description: {
        type: String,
        required: true,
      },
    },
  },
});
