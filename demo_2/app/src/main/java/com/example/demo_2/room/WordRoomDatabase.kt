package com.example.demo_2.room

import android.arch.persistence.room.Database
import android.arch.persistence.room.Room
import android.arch.persistence.room.RoomDatabase
import android.content.Context
import com.example.demo_2.dao.WordDao
import com.example.demo_2.entity.Word

@Database(entities = [Word::class], version = 1)
abstract class WordRoomDatabase : RoomDatabase() {
    abstract fun wordDao(): WordDao

    companion object {
        lateinit var INSTANCE: WordRoomDatabase

        fun getDatabase(conext: Context): WordRoomDatabase {
            if (INSTANCE == null) {
                synchronized(WordRoomDatabase::class) {
                    if (INSTANCE == null) {
                        INSTANCE = Room.databaseBuilder(conext.applicationContext,
                                WordRoomDatabase::class.java, "word_database")
                                .build()
                    }
                }
            }

            return INSTANCE
        }
    }

}