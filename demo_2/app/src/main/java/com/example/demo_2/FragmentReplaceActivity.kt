package com.example.demo_2

import android.os.Bundle
import androidx.fragment.app.FragmentTransaction
import androidx.appcompat.app.AppCompatActivity
import android.view.MenuItem
import com.example.demo_2.fragment.OneFragment
import com.example.demo_2.fragment.ThreeFragment
import com.example.demo_2.fragment.TwoFragment
import kotlinx.android.synthetic.main.activity_fragment_replace.*

class FragmentReplaceActivity : AppCompatActivity(), OneFragment.OnFragmentInteractionListener, TwoFragment.OnFragmentInteractionListener, ThreeFragment.OnFragmentInteractionListener {

    private var oneFragment: OneFragment? = null
    private var twoFragment: TwoFragment? = null
    private var threeFragment: ThreeFragment? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_fragment_replace)
        setSupportActionBar(toolbar_replace)

        //支持回退的主要功能
        supportActionBar!!.setDisplayHomeAsUpEnabled(true)

        if (oneFragment == null) {
            oneFragment = OneFragment()
        }

        supportFragmentManager.beginTransaction()
                .add(R.id.container_replace, oneFragment!!).commit()

    }

    //one to two
    override fun actionOneToTwo() {

        if (twoFragment == null) {
            twoFragment = TwoFragment()

        }
        supportFragmentManager.beginTransaction()
                .replace(R.id.container_replace, twoFragment!!).addToBackStack("two").commit()

    }

    //two to three
    override fun actionTwoToThree() {
        if (threeFragment == null) {
            threeFragment = ThreeFragment()

        }
        supportFragmentManager.beginTransaction()
                .replace(R.id.container_replace, threeFragment!!).addToBackStack("three").commit()
    }

    //two to one
    override fun actionTwoToOne() {
        supportFragmentManager.popBackStack()

//        if (supportFragmentManager.fragments.size > 0) {
//            supportFragmentManager.fragments.clear()
//
////            supportFragmentManager.beginTransaction()
////                    .replace(R.id.container_replace, oneFragment!!).addToBackStack("one").commit()
//        }

    }


    override fun actionThreeToTwo() {
        supportFragmentManager.popBackStack()
    }

    override fun onOptionsItemSelected(item: MenuItem?): Boolean {
        print( "${item!!.itemId}==================== itemid")
        if (item!!.itemId == android.R.id.home) {
            onBackPressed()
            return true
        }

        return super.onOptionsItemSelected(item)
    }

}
