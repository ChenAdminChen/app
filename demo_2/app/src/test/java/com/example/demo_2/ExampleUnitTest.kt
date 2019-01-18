package com.example.demo_2

import com.example.demo_2.entity.Word
import org.junit.Test

import org.junit.Assert.*

/**
 * Example local unit test, which will execute on the development machine (host).
 *
 * See [testing documentation](http://d.android.com/tools/testing).
 */
class ExampleUnitTest {
    @Test
    fun addition_isCorrect() {
        assertEquals(4, 2 + 2)
    }

    @Test
    fun type(){
        val word = Word()

        val w1 = Word::class
        val w2 = word::class

        //get a property ,can use get() return result , return Class
        val w3 = Word::class.java
        val w4= word::class.java

        val w5 = Word::javaClass
        val w6= word::javaClass

        val w7 = word.javaClass
        val w8 = word.javaClass.kotlin




    }
}
