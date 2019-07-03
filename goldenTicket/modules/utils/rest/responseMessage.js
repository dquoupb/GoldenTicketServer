module.exports = {
    NULL_VALUE: "필요한 값이 없습니다.",
    OUT_OF_VALUE: "파라미터 값이 잘못 되었습니다.",

    CREATED_USER: "회원가입 성공",
    FAIL_CREATED_USER: "회원 가입 실패",
    READ_USER: "로그인 성공",
    READ_USER_INFO: "유저 정보 조회 성공",
    FAIL_READ_USER: "유저 읽기 에러",
    UPDATED_USER: "회원 정보 수정 성공",
    FAIL_UPDATED_USER: "회원 정보 수정 실패",
    REMOVED_USER: "회원 탈퇴 성공",
    FAIL_REMOVED_USER: "회원 탈퇴 실패",

    ALREADY_USER: "존재하는 유저 id 입니다.",
    NO_USER: "존재하지 않는 유저 id 입니다.",
    MISS_MATCH_PW: "비밀번호가 일치하지 않습니다",
    WRONG_PW: "비밀번호가 틀렸습니다",
    ID_OR_PW_NULL_VALUE: "아이디/비밀번호 값이 없습니다.",

    CREATED_X: (X) => `${X} 작성 성공`,
    FAIL_CREATED_X: (X) => `${X} 작성 실패`,
    READ_X_ALL: (X) => `${X} 전체 조회 성공`,
    FAIL_READ_X_ALL: (X) => `${X} 전체 조회 실패`,
    READ_X: (X) => `${X} 상세 조회 성공`,
    FAIL_READ_X: (X) => `${X} 상세 조회 실패`,
    UPDATED_X: (X) => `${X} 수정 성공`,
    FAIL_UPDATED_X: (X) => `${X} 수정 실패`,
    REMOVED_X: (X) => `${X} 삭제 성공`,
    FAIL_REMOVED_X: (X) => `${X} 삭제 실패`,
    NO_X: (X) => `존재하지 않는 ${X} 입니다.`,
    ALREADY_X: (X) => `존재하는 ${X} 입니다.`,

    LIKE_X: "좋아요 성공",
    ALREADY_LIKE_X: "이미 좋아요 상태입니다.",
    FAIL_LIKE_X: "좋아요 실패",
    UNLIKE_X: "좋아요 취소",
    ALREADY_UNLIKE_X: "이미 좋아요 취소 상태입니다.",
    FAIL_UNLIKE_X: "좋아요 취소 실패",

    CREATE_TOKEN: "토큰 발급 완료.",
    EXPIRED_TOKEN: "만료된 토큰입니다.",
    REFRESH_TOKEN: "토큰 재발급 완료.",
    EMPTY_REFRESH_TOKEN: "재발급 토큰이 존재하지 않습니다.",
    EMPTY_TOKEN: "토큰값이 존재하지 않습니다.",
    NO_SELECT_AUTHORITY: "조회 권한 없음.",
    INVALID_TOKEN: "잘못된 형식의 토큰입니다.",
    INVALID_REFRESH_TOKEN: "잘못된 형식의 refresh token입니다",

    FAIL_ENCRYPTION: "암호화에 실패했습니다.",
    FAIL_DB_READ: "DB 읽기 실패",
    FAIL_DB_WRITE: "DB 쓰기 실패",
    FAIL_TO_FIND_INDEX: "인덱스 참조 실패"
}