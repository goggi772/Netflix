package com.netflixproject.entity.DTO;

import com.netflixproject.entity.BaseTimeEntity;
import com.netflixproject.entity.member.Member;
import com.netflixproject.entity.member.Role;
import lombok.*;

import java.time.LocalDateTime;

@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MemberRegisterDTO extends BaseTimeEntity {

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
                .build();
    }
}
