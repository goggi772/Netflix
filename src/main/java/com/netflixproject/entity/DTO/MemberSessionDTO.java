package com.netflixproject.entity.DTO;

import com.netflixproject.entity.member.Member;
import com.netflixproject.entity.member.Role;
import lombok.Getter;

import java.io.Serializable;

@Getter
public class MemberSessionDTO implements Serializable {

    private final String username;
    private final String nickname;
    private final String password;
    private final String email;
    private final Role role;

    public MemberSessionDTO(Member member) {
        this.username = member.getUsername();
        this.nickname = member.getNickname();
        this.password = member.getPassword();
        this.email = member.getEma();
        this.role = member.getRole();
    }
}
