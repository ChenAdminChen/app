package com.example.demo_2.entity

import android.arch.persistence.room.ColumnInfo
import android.arch.persistence.room.Entity
import android.arch.persistence.room.PrimaryKey
import android.support.annotation.NonNull

@Entity(tableName = "word_table")
class Word {


    @PrimaryKey
    @NonNull
    @ColumnInfo(name = "word")
    var mWord: String = ""

    constructor()

    fun Word(word: String) {
        this.mWord = word
    }

    fun getWord(): String {
        return this.mWord
    }
}