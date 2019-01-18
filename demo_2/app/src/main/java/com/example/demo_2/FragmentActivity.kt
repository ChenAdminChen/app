package com.example.demo_2

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity;
import android.view.MenuItem
import com.example.demo_2.fragment.FragmentA
import com.example.demo_2.fragment.FragmentB

import kotlinx.android.synthetic.main.activity_fragment.*

class FragmentActivity : AppCompatActivity(), FragmentB.OnFragmentInteractionListener, FragmentA.OnFragmentInteractionListener {


    private lateinit var fragmentA: FragmentA
    private lateinit var fragmentB: FragmentB

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_fragment)

        //支持回退的主要功能
        setSupportActionBar(toolbar)
        supportActionBar!!.setDisplayHomeAsUpEnabled(true)


//        fab.setOnClickListener { view ->
//            Snackbar.make(view, "Replace with your own action", Snackbar.LENGTH_LONG)
//                    .setAction("Action", null).show()
//        }



        fragmentA = FragmentA()

        fragmentB = FragmentB()

        supportFragmentManager.beginTransaction()
                .replace(R.id.container_a, fragmentA)
                .replace(R.id.container_b, fragmentB)
                .commit()
    }

    override fun onOptionsItemSelected(item: MenuItem?): Boolean {
        if (item!!.itemId == android.R.id.home) {
            onBackPressed()
            return true
        }

        return super.onOptionsItemSelected(item)
    }

    override fun onInputASent(input: CharSequence) {
        fragmentB.updateEditText(input)
    }

    override fun onInputBSent(input: CharSequence) {
        fragmentA.updateEditText(input)
    }

}
