package com.netflixproject.jwt;

import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public enum ErrorCode {

    AUTHENTICATION_FAILED(401, "AUTH001", " AUTHENTICATION_FAILED."),
    LOGIN_FAILED(401, "AUTH002", " LOGIN_FAILED."),
    INVALID_JWT_TOKEN(401, "AUTH003", "INVALID_JWT_TOKEN."),
    EXPIRED_TOKEN(401, "AUTH004", "EXPIRED_TOKEN");

    private final String code;

    private final String message;

    private int status;

    ErrorCode(final int status, final String message, final String code) {
        this.status = status;
        this.message = message;
        this.code = code;
    }
}