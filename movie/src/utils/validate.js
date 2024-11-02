const emailPattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

function validateUser(values) {
    const errors = {};

    if (!values.email || emailPattern.test(values.email) === false) {
        errors.email = '올바른 이메일 형식이 아닙니다. 다시 확인해주세요';
    }

    if (!values.password || values.password.length < 8 || values.password.length > 16) {
        errors.password = '비밀번호는 8 ~ 16자 사이로 입력해주세요';
    }

    return errors;
}

function validateLogin(values) {
    return validateUser(values);
}

function validateSignUp(values) {
    const errors = validateUser(values);

    if (!values.name) {
        errors.name = "이름을 입력해주세요.";
    }

    if (values.password !== values.confirmPassword) {
        errors.confirmPassword = "비밀번호가 일치하지 않습니다.";
    }

    return errors;
}

export { validateLogin, validateSignUp };
