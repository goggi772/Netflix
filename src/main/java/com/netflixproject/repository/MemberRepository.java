package com.netflixproject.repository;

import com.netflixproject.entity.DTO.MemberFindDTO;
import com.netflixproject.entity.member.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.Optional;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {
    Optional<Member> findByUsername(String username);

    Optional<Member> findByEma(String email);

    /*static final String UPDATE_USER_LAST_LOGIN = "UPDATE member SET MODIFIED_TIME = :lastLoginTime WHERE USERNAME = :username";

    @Transactional //트랜잭션 설정(에러발생시 DB rollback)
    @Modifying //DB 테이블 변경하는 쿼리 작성시 적용해야 하는 annotation
    @Query(value = "UPDATE_USER_LAST_LOGIN", nativeQuery = true) //일반 sql쿼리 적용s
    public int updateUserLastLogin(@Param("username") String username, @Param("lastLoginTime") LocalDateTime lastLoginTime);*/
}