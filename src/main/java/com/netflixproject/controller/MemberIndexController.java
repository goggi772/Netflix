package com.netflixproject.controller;

import com.netflixproject.entity.DTO.MemberFindDTO;
import com.netflixproject.entity.DTO.MemberRegisterDTO;
import com.netflixproject.entity.DTO.MemberLoginDTO;
import com.netflixproject.entity.DTO.TokenInfo;
import com.netflixproject.entity.member.Member;
import com.netflixproject.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
@Controller
public class MemberIndexController {

    private final MemberService memberService;

    @GetMapping("/auth/show")
    public String showAll(Model model) {
        model.addAttribute("memberList", memberService.findAll());
        return "home";
    }

    @ResponseBody
    @PostMapping("/auth/login")
    public TokenInfo login(@RequestBody MemberLoginDTO memberLoginDTO) {
        String id = memberLoginDTO.getUsername();
        String password = memberLoginDTO.getPassword();
        System.out.println(id);
        System.out.println(password);
        return memberService.login(id, password);
    }


    @ResponseBody
    @PostMapping("/auth/join")
    public Member join(@RequestBody MemberRegisterDTO dto) {
        return memberService.register(dto);
    }

    @ResponseBody
    @GetMapping("/auth/check_email")
    public Optional<Member> emailCheck(@RequestBody MemberFindDTO memberFindDTO) {
        return memberService.findByEmail(memberFindDTO);
    }

//    @GetMapping("/auth/login-form")
//    public String login_page() {
//        return "login_page";
//    }
//
//    @GetMapping("/auth/register")
//    public String register() {
//        return "register";
//    }

}
