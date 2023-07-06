package com.netflixproject.jwt;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
@Component
@RequiredArgsConstructor
public class JwtAuthenticationEntryPoint implements AuthenticationEntryPoint {

    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException {
        String exception = (String)request.getAttribute("exception");
        ErrorCode errorCode;

        log.debug("log: exception: {} ", exception);

        /**
         * 토큰 없는 경우
         */
        if(exception == null) {
            errorCode = ErrorCode.LOGIN_FAILED;
            setResponse(response, errorCode);
            return;
        }

        /**
         * 토큰 만료된 경우
         */
        if(exception.equals(ErrorCode.EXPIRED_TOKEN.getCode())) {
            errorCode = ErrorCode.EXPIRED_TOKEN;
            setResponse(response, errorCode);
            return;
        }

        /**
         * 토큰 시그니처가 다른 경우
         */
        if(exception.equals(ErrorCode.INVALID_JWT_TOKEN.getCode())) {
            errorCode = ErrorCode.INVALID_JWT_TOKEN;
            setResponse(response, errorCode);
        }
    }

    /**
     * 한글 출력을 위해 getWriter() 사용
     */
    private void setResponse(HttpServletResponse response, ErrorCode errorCode) throws IOException {
        response.setContentType("application/json;charset=UTF-8");
        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        response.getWriter().println("{ \"message\" : \"" + errorCode.getMessage()
                + "\", \"code\" : \"" +  errorCode.getCode()
                + "\", \"status\" : " + errorCode.getStatus()
                + ", \"errors\" : [ ] }");
    }
    /*@Autowired
    @Qualifier("handlerExceptionResolver")
    private HandlerExceptionResolver resolver;

    @Override
    public void commence(HttpServletRequest request,
                         HttpServletResponse response,
                         AuthenticationException e) throws IOException, ServletException {
        String noAuthMessage = "{\n" +
                "    \"status\": \"FAILURE\",\n" +
                "    \"message\": \"No authority\"\n" +
                "}";
        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        response.setContentType(APPLICATION_JSON.toString());
        response.getWriter().println(noAuthMessage);
        resolver.resolveException(request, response, null, e);
    }*/
}
