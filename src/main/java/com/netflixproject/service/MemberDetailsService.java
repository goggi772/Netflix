package com.netflixproject.service;

import com.netflixproject.entity.DTO.MemberSessionDTO;
import com.netflixproject.entity.member.Member;
import com.netflixproject.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpSession;

@RequiredArgsConstructor
@Component
public class MemberDetailsService implements UserDetailsService {

    private final MemberRepository memberRepository;

//    private final HttpSession session;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        Member member = memberRepository.findByUsername(username).orElseThrow(() ->
                new UsernameNotFoundException("이용자가 존재하지 않습니다. :" + username));
//        session.setAttribute("member", new MemberSessionDTO(member));
        return new MemberServiceDetails(member);
    }
}
