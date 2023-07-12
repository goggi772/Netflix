package com.netflixproject.entity.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
public class MemberFindDTO {

    private String email;

    private String username;

    private String nickname;
}
