package com.netflixproject.service;

import com.netflixproject.entity.DTO.MemberFindDTO;
import com.netflixproject.entity.DTO.MemberRegisterDTO;
import com.netflixproject.entity.DTO.TokenInfo;
import com.netflixproject.entity.member.Member;
import com.netflixproject.jwt.JwtTokenProvider;
import com.netflixproject.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletResponse;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class MemberService {

    private final MemberRepository memberRepository;

    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    private final AuthenticationManagerBuilder authenticationManagerBuilder;

    private final JwtTokenProvider jwtTokenProvider;


    @Transactional
    public TokenInfo login(String username, String password) {
        // 1. Login ID/PW 를 기반으로 Authentication 객체 생성
        // 이때 authentication 는 인증 여부를 확인하는 authenticated 값이 false
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(username, password);

        // 2. 실제 검증 (사용자 비밀번호 체크)이 이루어지는 부분
        // authenticate 매서드가 실행될 때 CustomUserDetailsService 에서 만든 loadUserByUsername 메서드가 실행
        Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);

        // 3. 인증 정보를 기반으로 JWT 토큰 생성
        return jwtTokenProvider.generateToken(authentication);
    }

    @Transactional
    public Member register(MemberRegisterDTO dto) {
        dto.setPassword(bCryptPasswordEncoder.encode(dto.getPassword()));

        return memberRepository.save(dto.toEntity());
    }

    public List<Member> findAll() {
        return memberRepository.findAll();
    }

    public Optional<Member> findByEmail(MemberFindDTO memberFindDTO) {
        Optional<Member> member = memberRepository.findByEma(memberFindDTO.getEmail());
        if (member.isPresent()) return member;
        else throw new UsernameNotFoundException("이메일이 존재히지 않음");
    }

    public Optional<Member> findById(Long id) {
        return memberRepository.findById(id);
    }
}
