package com.netflixproject.entity.DTO;

import com.netflixproject.entity.member.Member;
import com.netflixproject.entity.member.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MemberDTO {

    private String username;
    private String password;

    private String nickname;

    private String email;

    private Role role;

    public Member toEntity() {
        Member member = Member.builder()
                .username(username)
                .password(password)
                .nickname(nickname)
                .ema(email)
                .role(role.USER)
                .build();
        return member;
    }
}
