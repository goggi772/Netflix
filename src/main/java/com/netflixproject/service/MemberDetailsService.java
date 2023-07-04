package com.netflixproject.service;

import com.netflixproject.entity.member.Member;
import com.netflixproject.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
public class MemberDetailsService implements UserDetailsService {

    private final MemberRepository memberRepository;

    private final BCryptPasswordEncoder bCryptPasswordEncoder;

//    private final HttpSession session;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        Member member = memberRepository.findByUsername(username).orElseThrow(() ->
                new UsernameNotFoundException("이용자가 존재하지 않습니다. :" + username));
//        session.setAttribute("member", new MemberSessionDTO(member));
        return new MemberServiceDetails(member);
    }

    private UserDetails createUserDetails(MemberServiceDetails memberServiceDetails) {
        /*Member member1 = User.builder()
                .username(member.getUsername())
                .password(bCryptPasswordEncoder.encode(member.getPassword()))
                .roles()
                .build();*/
        return User.builder()
                .username(memberServiceDetails.getUsername())
                .password(bCryptPasswordEncoder.encode(memberServiceDetails.getPassword()))
                .build();
    }
}
