package com.example.demo_2.entity

import androidx.room.ColumnInfo
import androidx.room.Entity
import androidx.room.PrimaryKey
import androidx.annotation.NonNull

/**
 * @Entity(tableName = "word_table") 每一个@Entity类代表数据库中的一张表。tableName为生成表的表名。
 * @PrimaryKey 每个实体需要一个主键。
 * @NonNull 表示参数、字段或返回值不能为null。
 * @ColumnInfo(name = "word") 指定与成员变量对应的列名。
 * 为一个字段需要是public的或提供get方法。
 */
@Entity(tableName = "word_table")
data class Word(
        @PrimaryKey
        @NonNull
        @ColumnInfo(name = "word")
        var word: String = ""
)
