package com.netflixproject.service;

import com.netflixproject.entity.member.Member;
import com.netflixproject.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Optional;

@RequiredArgsConstructor
@Component
@Slf4j
public class MemberDetailsService implements UserDetailsService {

    private final MemberRepository memberRepository;

    private final BCryptPasswordEncoder bCryptPasswordEncoder;

//    private final HttpSession session;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        /*Optional<Member> member = memberRepository.findByUsername(username);
        if (member.isPresent()) {
            log.info("username");
            return new MemberServiceDetails(member.get());
        } else {
            log.info("non user");
            throw new UsernameNotFoundException("이용자가 존재하지 않습니다. :" + username);
        }*/
        Member member = memberRepository.findByUsername(username).orElseThrow(() ->
                new UsernameNotFoundException("이용자가 존재하지 않습니다. :" + username));
//        session.setAttribute("member", new MemberSessionDTO(member));
        System.out.println(member.toString());
        return new MemberServiceDetails(member);
    }
}
