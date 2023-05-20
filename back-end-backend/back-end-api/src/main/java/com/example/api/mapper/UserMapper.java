package com.example.api.mapper;

import com.example.api.entity.Account;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface UserMapper {

  @Select("select * from user where username = #{text} or email = #{text}")
  Account findAccpintByNameOrEmail(String text);

}
