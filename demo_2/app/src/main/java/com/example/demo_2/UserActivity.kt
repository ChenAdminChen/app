package com.example.demo_2

import androidx.databinding.DataBindingUtil
import android.os.Bundle
import com.google.android.material.snackbar.Snackbar
import androidx.appcompat.app.AppCompatActivity
import android.view.MenuItem
import android.widget.SearchView
import com.example.demo_2.databinding.ActivityUserBinding
import com.example.demo_2.entity.User
import kotlinx.android.synthetic.main.activity_user.*

/**
 * dataBinding use
 * 1. add  android{ dataBinding {enabled = true}} this app build.gradle
 * 2. xml add <layout><>........</><layout>
 * 3.  var binding = DataBindingUtil.setContentView<ActivityUserBinding>(this, R.layout.activity_user)
 * 4. binding.userSearchView
 *
 */

class UserActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        var binding = DataBindingUtil.setContentView<ActivityUserBinding>(this, R.layout.activity_user)

//        setContentView(R.layout.activity_user)


        fab.setOnClickListener { view ->
            Snackbar.make(view, "Replace with your own action", Snackbar.LENGTH_LONG)
                    .setAction("Action", null).show()
        }

        //toolbar to changer supportActionBar
        setSupportActionBar(toolbar)
        supportActionBar!!.setDisplayHomeAsUpEnabled(true)
        toolbar.setTitle(R.string.search_content)

//
        with(binding.userSearchView) {

            onActionViewExpanded()

            requestFocus() //输入焦点
            isSubmitButtonEnabled = true //添加提交按钮，监听在OnQueryTextListener的onQueryTextSubmit响应
            isFocusable = true //将控件设置成可获取焦点状态,默认是无法获取焦点的,只有设置成true,才能获取控件的点击事件
            isIconified = false //输入框内icon不显示
            requestFocusFromTouch() //模拟焦点点击事件

            isFocusable = false //禁止弹出输入法，在某些情况下有需要
            clearFocus()//禁止弹出输入法，在某些情况下有需要

            setOnQueryTextListener(object : SearchView.OnQueryTextListener {
                override fun onQueryTextSubmit(query: String): Boolean {

                    println(query)
                    return false
                }

                override fun onQueryTextChange(newText: String): Boolean {

                    print("onQueryTextChange:$newText")
                    return false
                }
            })
        }

        val user = User(1, "chen", "12345678@yf.com")

        println(user)
        binding.userActivity = user

    }

    //fun return true tell android_system i has handle
    //fun return false tell android_system i hasn't handle

    //this function from AppCompatActivity
    override fun onOptionsItemSelected(item: MenuItem?): Boolean {
        if (item!!.itemId == android.R.id.home) {
            onBackPressed()
            return true
        }

        return super.onOptionsItemSelected(item)
    }
}
