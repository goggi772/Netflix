package com.netflixproject.jwt;

import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public enum ErrorCode {

    AUTHENTICATION_FAILED(401, "AUTH001", " AUTHENTICATION_FAILED."),
    LOGIN_FAILED(401, "AUTH002", " LOGIN_FAILED."),
    INVALID_JWT_TOKEN(401, "AUTH003", "INVALID_JWT_TOKEN.");

    private final int code;

    private final String message;

    private final String status;

    ErrorCode(int code, String message, String status) {
        this.code = code;
        this.message = message;
        this.status = status;
    }
}