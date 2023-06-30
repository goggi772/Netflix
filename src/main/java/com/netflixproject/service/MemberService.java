package com.netflixproject.service;

import com.netflixproject.entity.DTO.MemberDTO;
import com.netflixproject.entity.member.Member;
import com.netflixproject.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
public class MemberService {

    private final MemberRepository memberRepository;

    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Transactional
    public Member register(MemberDTO dto) {
        dto.setPassword(bCryptPasswordEncoder.encode(dto.getPassword()));

        return memberRepository.save(dto.toEntity());
    }
}
