package com.netflixproject.controller;

import com.netflixproject.entity.DTO.MemberDTO;
import com.netflixproject.entity.DTO.MemberSessionDTO;
import com.netflixproject.entity.member.Member;
import com.netflixproject.repository.MemberRepository;
import com.netflixproject.service.MemberDetailsService;
import com.netflixproject.service.MemberService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.Optional;

@RestController
public class MemberIndexController {

    private MemberService memberService;

    @GetMapping("/auth/register")
    public String register() {
        return "login";
    }

    @PostMapping("/auth/registerProc")
    public String registerProc(MemberDTO dto) {
        memberService.register(dto);
        return "redirect:/auth/login";
    }

    @GetMapping("/auth/login")
    public String login() {
        return "member_login";
    }

    @GetMapping("/auth/{username}/{nickname}/{password}/{role}")
    public Member join(@ModelAttribute MemberDTO dto, HttpSession session, Model model) {
        MemberSessionDTO user = (MemberSessionDTO) session.getAttribute("user");
        if(user != null) {
            model.addAttribute("user", user.getNickname());
        }
        return memberService.register(dto);
    }

    /*@GetMapping("/")
    public String index(Model model, HttpSession session) {
        MemberSessionDTO user = (MemberSessionDTO) session.getAttribute("user");
        if(user != null) {
            model.addAttribute("user", user.getNickname());
        }
        return "";
    }*/
}
