package com.netflixproject.controller;

import com.netflixproject.entity.DTO.MemberDTO;
import com.netflixproject.entity.DTO.MemberLoginDTO;
import com.netflixproject.entity.DTO.TokenInfo;
import com.netflixproject.entity.member.Member;
import com.netflixproject.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;

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

    /*@PostMapping("/auth/registerProc")
    public String registerProc(@RequestBody MemberDTO dto) {
        memberService.register(dto);
        return "redirect:/auth/show";
    }*/

    @ResponseBody
    @PostMapping("/auth/login")
    public TokenInfo login(@ModelAttribute MemberLoginDTO memberLoginDTO) {
        String id = memberLoginDTO.getUsername();
        String password = memberLoginDTO.getPassword();
        System.out.println(id);
        System.out.println(password);
        return memberService.login(id, password);
    }

    @GetMapping("/auth/login-form")
    public String login_page() {
        return "login_page";
    }

    @GetMapping("/auth/register")
    public String register() {
        return "register";
    }

    @ResponseBody
    @PostMapping("/auth/join")
    public Member join(@ModelAttribute MemberDTO dto) {
        return memberService.register(dto);
    }
}
