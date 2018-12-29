package com.example.demo_2.dao

import android.arch.lifecycle.LiveData
import android.arch.persistence.room.Dao
import android.arch.persistence.room.Insert
import android.arch.persistence.room.Query
import com.example.demo_2.entity.Word

@Dao
interface WordDao {
    @Insert
    fun insert(word: Word)

    @Query("DELETE FROM word_table")
    fun deleteAll()

    @Query("SELECT * from word_table order by word asc")
    fun getAllWords(): LiveData<List<Word>>
}