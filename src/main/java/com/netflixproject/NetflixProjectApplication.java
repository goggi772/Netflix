package com.netflixproject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;


@EnableJpaAuditing
@EnableJpaRepositories
@SpringBootApplication
public class NetflixProjectApplication {

    public static void main(String[] args) {
        SpringApplication.run(NetflixProjectApplication.class, args);
    }

}
