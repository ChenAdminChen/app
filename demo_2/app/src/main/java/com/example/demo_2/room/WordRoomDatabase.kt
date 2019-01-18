package com.example.demo_2.room

import androidx.sqlite.db.SupportSQLiteDatabase
import androidx.room.Database
import androidx.room.Room
import androidx.room.RoomDatabase
import android.content.Context
import android.os.AsyncTask
import androidx.annotation.NonNull
import com.example.demo_2.dao.WordDao
import com.example.demo_2.entity.Word
import java.util.*

/**
 * 创建一个public abstract类WordRoomDatabase，并继承RoomDatabase。即public abstract class WordRoomDatabase extends RoomDatabase {}
   标注其为一个Room数据库，@Database(entities = {Word.class}, version = 1)，声明其在数据库中的实体，并指定版本号。
   实体可以声明多个，声明的实体将在数据库中创建对应的表。
   定义使用数据库的DAO。给每一个@Dao提供get方法。public abstract WordDao wordDao();
 */
@Database(entities = [Word::class], version = 1, exportSchema = false)
abstract class WordRoomDatabase : RoomDatabase() {
    abstract fun wordDao(): WordDao

    companion object {
        var INSTANCE: WordRoomDatabase? = null

        fun getDatabase(conext: Context): WordRoomDatabase {
            if (INSTANCE == null) {
                synchronized(WordRoomDatabase::class) {
                    if (INSTANCE == null) {
                        //创建数据库
                        INSTANCE = Room.databaseBuilder(conext.applicationContext,
                                WordRoomDatabase::class.java, "word_database")
                                .addCallback(sRommDatabaseCallback)
                                .build()
                    }
                }
            }

            return INSTANCE!!
        }

        //TODO kotlin 实现接口的做法
        var sRommDatabaseCallback = object : RoomDatabase.Callback() {
            override
            fun onOpen(@NonNull db: SupportSQLiteDatabase) {
                super.onOpen(db)
                PopulateDbAsync(INSTANCE!!).execute()
            }


        }
    }
}

//在创建数据库时向其表中添加数据
class PopulateDbAsync : AsyncTask<Void, Void, Void> {

    override fun doInBackground(vararg params: Void?): Void? {
        mDao.deleteAll()
        var word: Word = Word("Hello")

        mDao.insert(word)

        word = Word("World")

        mDao.insert(word)

        return null
    }

    var mDao: WordDao

    constructor(db: WordRoomDatabase) : super() {
        this.mDao = db.wordDao()
    }
}