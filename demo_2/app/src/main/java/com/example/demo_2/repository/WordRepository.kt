package com.example.demo_2.repository

import android.app.Application
import android.arch.lifecycle.LiveData
import android.os.AsyncTask
import com.example.demo_2.dao.WordDao
import com.example.demo_2.entity.Word
import com.example.demo_2.room.WordRoomDatabase


class WordRepository {
    lateinit var mWordDao: WordDao
    lateinit var mAllWords: LiveData<List<Word>>

    fun WordRepository(application: Application) {
        var db = WordRoomDatabase.getDatabase(application)

        mWordDao = db.wordDao()
        mAllWords = mWordDao.getAllWords()


    }

    fun getAllWords(): LiveData<List<Word>> {
        return mAllWords
    }


    fun insert(word: Word) {
        insertAsyncTask(mWordDao).execute(word);
    }

    companion object {

        internal class insertAsyncTask(private val mAsyncTaskDao: WordDao) : AsyncTask<Word, Void, Void>() {

            override fun doInBackground(vararg params: Word): Void? {
                mAsyncTaskDao.insert(params[0])
                return null
            }
        }
    }


}