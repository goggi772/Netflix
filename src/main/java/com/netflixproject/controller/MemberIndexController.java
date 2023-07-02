package com.netflixproject.controller;

import com.netflixproject.entity.DTO.MemberDTO;
import com.netflixproject.entity.DTO.MemberSessionDTO;
import com.netflixproject.entity.member.Member;
import com.netflixproject.repository.MemberRepository;
import com.netflixproject.service.MemberDetailsService;
import com.netflixproject.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.Optional;

@RequiredArgsConstructor
@Controller
public class MemberIndexController {

    private final MemberService memberService;


    @GetMapping("/auth/show")
    public String showAll(Model model) {
        model.addAttribute("memberList", memberService.findAll());
        return "home";
    }

    @PostMapping("/auth/registerProc")
    public String registerProc(MemberDTO dto) {
        memberService.register(dto);
        return "redirect:/auth/show";
    }

    @ResponseBody
    @GetMapping("/auth/{username}/{nickname}/{password}/{email}/{role}")
    public Member join(@ModelAttribute MemberDTO dto, HttpSession session, Model model) {
        MemberSessionDTO user = (MemberSessionDTO) session.getAttribute("user");
        if(user != null) {
            model.addAttribute("user", user.getNickname());
        }
        return memberService.register(dto);
    }
}
