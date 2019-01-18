package com.example.demo_2.repository

import android.app.Application
import androidx.lifecycle.LiveData
import android.os.AsyncTask
import com.example.demo_2.dao.WordDao
import com.example.demo_2.entity.Word
import com.example.demo_2.room.WordRoomDatabase

/**
 * Repository管理查询线程，并允许您使用多个后端。在最常见的示例中，Repository实现了决定是从网络获取数据还是从本地缓存中获取结果的逻辑。
 *
 */
class WordRepository {

    lateinit var mWordDao: WordDao

    lateinit var mAllWords: LiveData<List<Word>>

    constructor()

    constructor(application: Application) {

        var db = WordRoomDatabase.getDatabase(application)

        mWordDao = db.wordDao()
        mAllWords = mWordDao.getAllWords()


    }

    //为getAllWords()添加一个包装器。Room在单独的线程上执行所有查询。观察到LiveData数据更改时，将通知观察者。
    fun getAllWords(): LiveData<List<Word>> {
        return mAllWords
    }


    //为insert()方法添加一个包装器。使用AsyncTask来执行，确保其是在非UI线程中执行
    fun insert(word: Word) {
        insertAsyncTask(mWordDao).execute(word)

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