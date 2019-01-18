package com.example.demo_2.dao

import androidx.lifecycle.LiveData
import androidx.room.Dao
import androidx.room.Insert
import androidx.room.Query
import com.example.demo_2.entity.Word

/**
 * DAO是代码的基础，它用于提供word的增、删、改、查。
 *  创建一个名为WordDao的接口。
 *  为WordDao添加@Dao注解
 *  声明一个插入方法void insert(Word word);
 *  为上述方法添加@Insert注解，并且不需要为其提供SQL语句！（同样的用法还有@Delete and @Update）
 *  声明方法void deleteAll();
 *  这里没有方便的注解可以用于删除多个实体，因此需要用@Query注解
 *  还需要为@Query注解提供SQL语句@Query("DELETE FROM word_table")
 *  创建方法List<Word> getAllWords();
 *  为其添加注解与SQL@Query("SELECT * from word_table ORDER BY word ASC")
 *
 *
 */
@Dao
interface WordDao {
    @Insert
    fun insert(word: Word)

    @Query("DELETE FROM word_table")
    fun deleteAll()

    @Query("SELECT * from word_table order by word asc")
    fun getAllWords(): LiveData<List<Word>>
}