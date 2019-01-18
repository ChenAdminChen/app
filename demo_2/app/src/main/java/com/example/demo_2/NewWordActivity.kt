package com.example.demo_2

import android.content.Intent
import android.os.Bundle
import com.google.android.material.snackbar.Snackbar
import androidx.appcompat.app.AppCompatActivity;
import android.text.TextUtils
import android.view.View
import android.widget.Button
import android.widget.EditText

import kotlinx.android.synthetic.main.activity_new_word.*

class NewWordActivity : AppCompatActivity() {

    companion object {

        var EXTRA_REPLY = "com.example.android.wordlistsql.REPLY"
    }

    lateinit var mEditWordView: EditText

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_new_word)
        setSupportActionBar(toolbar)

        mEditWordView = findViewById(R.id.edit_word)

        var button = findViewById<Button>(R.id.button_save)

        button.setOnClickListener {

            var replyIntent = Intent()

            if (TextUtils.isEmpty(mEditWordView.text)) {
                setResult(RESULT_CANCELED, replyIntent)

            } else {
                var word = mEditWordView.text.toString()
                replyIntent.putExtra(EXTRA_REPLY, word)

                setResult(RESULT_OK, replyIntent)
            }

            finish()
        }



        fab.setOnClickListener { view ->
            Snackbar.make(view, "Replace with your own action", Snackbar.LENGTH_LONG)
                    .setAction("Action", null).show()
        }
    }


}
