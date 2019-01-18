package com.example.demo_2

import android.app.Activity
import androidx.lifecycle.Observer
import androidx.lifecycle.ViewModelProviders
import android.content.Intent
import android.os.Bundle
import com.google.android.material.snackbar.Snackbar
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.RecyclerView
import android.widget.Toast
import androidx.recyclerview.widget.LinearLayoutManager
import com.example.demo_2.adapter.WordListAdapter
import com.example.demo_2.entity.Word
import com.example.demo_2.model.WordViewModel
import com.example.demo_2.model.WordViewModelFactory

import kotlinx.android.synthetic.main.activity_room_test.*

/**
 * 该activity主要用于room的demo,没有到数据绑定
 * 实体类：{@link Word}
 * 数据操作层：{@link WordDao}
 * 视图层： {@link WordViewModel}其实现基于 {@link WordViewModelFactory}
 * 将数据与UI进行分离： {@link WordRepository}
 * 将数据操作线程与处理UT线程分离开： {@link WordRoomDatabase}
 */

/**
 * LayoutManager的作用就是负责元素的布局和复用。
 * LinearLayoutManager 线性布局
 * GridLayoutManager  网格布局
 * StaggeredGridLayoutManager 动态表格布局，可以方便的实现瀑布流效果
 */
class RoomTestActivity : AppCompatActivity() {

    lateinit var mWordViewModel: WordViewModel

    val NEW_WORD_ACTIVITY_REQUEST_CODE = 1

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_room_test)
        setSupportActionBar(toolbar)

        var recycleView: androidx.recyclerview.widget.RecyclerView = findViewById(R.id.recyclerview)

        var adapter: WordListAdapter = WordListAdapter(this)

        recycleView.adapter = adapter

        //TODO LinearLayoutManager
        recycleView.layoutManager = LinearLayoutManager(this)

        mWordViewModel = ViewModelProviders.of(this, WordViewModelFactory(this.application)).get(WordViewModel::class.java)

        mWordViewModel.getmAllWords().observe(this, Observer<List<Word>> { words -> adapter.setMWords(words) })

        fab.setOnClickListener {

            var intent = Intent()
            intent.setClass(this, NewWordActivity::class.java)

            startActivityForResult(intent, NEW_WORD_ACTIVITY_REQUEST_CODE)

        }

    }

    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.onActivityResult(requestCode, resultCode, data)

        if (requestCode == NEW_WORD_ACTIVITY_REQUEST_CODE && resultCode == Activity.RESULT_OK) {
            var word = Word(data!!.getStringExtra(NewWordActivity.EXTRA_REPLY))
            mWordViewModel.insert(word)
        } else {
            Toast.makeText(applicationContext, R.string.empty_not_saved, Toast.LENGTH_LONG).show()
        }
    }

}
