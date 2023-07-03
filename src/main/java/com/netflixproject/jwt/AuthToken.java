package com.netflixproject.jwt;

public interface AuthToken<T> {
    boolean validate();

    T getData();
}
