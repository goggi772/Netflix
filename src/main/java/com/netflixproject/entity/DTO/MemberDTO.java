package com.netflixproject.entity.DTO;

import com.netflixproject.entity.BaseTimeEntity;
import com.netflixproject.entity.member.Member;
import com.netflixproject.entity.member.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MemberDTO extends BaseTimeEntity {

    private String username;
    private String password;

    private String nickname;

    private String email;

    private LocalDateTime registerTime;

    private Role role;

    public Member toEntity() {
        return Member.builder()
                .username(username)
                .password(password)
                .nickname(nickname)
                .ema(email)
                .role(Role.USER)
                .registerTime(LocalDateTime.now())
                .build();
    }
}
