package com.example.demo_2

import android.content.Intent
import android.os.Bundle
import com.google.android.material.snackbar.Snackbar
import com.google.android.material.navigation.NavigationView
import androidx.core.view.GravityCompat
import androidx.appcompat.app.ActionBarDrawerToggle
import androidx.appcompat.app.AppCompatActivity
import android.view.Menu
import android.view.MenuItem
import kotlinx.android.synthetic.main.activity_main.*
import kotlinx.android.synthetic.main.app_bar_main.*

private const val ARG_PARAM1 = "param1"

/**
 * # app main page
 * + {@link UserActivity} ~~this~~ page can go to all Activity
 *
 */
class MainActivity : AppCompatActivity(), NavigationView.OnNavigationItemSelectedListener {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        setSupportActionBar(toolbar)

        fab.setOnClickListener { view ->
            Snackbar.make(view, "Replace with your own action", Snackbar.LENGTH_LONG)
                    .setAction("Action", null).show()
        }

        val toggle = ActionBarDrawerToggle(
                this, drawer_layout, toolbar, R.string.navigation_drawer_open, R.string.navigation_drawer_close)
        drawer_layout.addDrawerListener(toggle)
        toggle.syncState()

        nav_view.setNavigationItemSelectedListener(this)
    }

    override fun onBackPressed() {
        if (drawer_layout.isDrawerOpen(GravityCompat.START)) {
            drawer_layout.closeDrawer(GravityCompat.START)
        } else {
            super.onBackPressed()
        }
    }

    override fun onCreateOptionsMenu(menu: Menu): Boolean {
        // Inflate the menu; this adds items to the action bar if it is present.
        menuInflater.inflate(R.menu.main, menu)
        return true
    }

    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        when (item.itemId) {
            R.id.action_settings -> return true
            else -> return super.onOptionsItemSelected(item)
        }
    }

    //跳转到指定的 activity
    override fun onNavigationItemSelected(item: MenuItem): Boolean {
        // Handle navigation view item clicks here.
        when (item.itemId) {
            R.id.nav_camera -> {
                // Handle the camera action
                var intent = Intent()
                intent.setClass(this, UserActivity::class.java)
                startActivity(intent)
            }

            R.id.nav_gallery -> {

//                var intent = Intent("com.chen.action.PersonShow")
                var intent = Intent()
                intent.setClass(this, PersonShowActivity::class.java)
                startActivity(intent)

                println("nav_gallery")
            }

            R.id.nav_slideshow -> {
                var intent = Intent()
                intent.setClass(this, FragmentActivity::class.java)
                startActivity(intent)
            }

            R.id.nav_manage -> {
                var intent = Intent()
                intent.setClass(this, FragmentReplaceActivity::class.java)
                startActivity(intent)
            }
            R.id.nav_share -> {
                var intent = Intent()
                intent.setClass(this, RoomTestActivity::class.java)
                startActivity(intent)
            }
            R.id.nav_send -> {

            }
        }

        drawer_layout.closeDrawer(GravityCompat.START)
        return true
    }
}
