package com.example.demo_2.adapter

import android.content.Context
import androidx.recyclerview.widget.RecyclerView
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import com.example.demo_2.R
import com.example.demo_2.entity.Word

/**
 * 用于展示列表数据
 */
class WordListAdapter : RecyclerView.Adapter<WordListAdapter.WordViewHolder> {
    var mInflater: LayoutInflater

    private var mWords: List<Word> ?= null

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): WordViewHolder {
        var itemView: View = mInflater.inflate(R.layout.recyclerview_item, parent, false);

        return WordViewHolder(itemView)
    }

    override fun getItemCount(): Int {
        return if (mWords != null)
            mWords!!.size
        else
            0
    }

    override fun onBindViewHolder(holder: WordViewHolder, position: Int) {
        if (mWords != null) {
            var current: Word = mWords!![position]
            holder.wordItemView.text = current.word
        } else {
            holder.wordItemView.text = "No Word"
        }
    }


    constructor(context: Context) : super() {
        mInflater = LayoutInflater.from(context);
    }


    fun setMWords(words: List<Word>) {
        mWords = words
        notifyDataSetChanged()
    }

    class WordViewHolder : RecyclerView.ViewHolder {
        var wordItemView: TextView

        constructor(wordItemView: View) : super(wordItemView) {

            this.wordItemView = wordItemView.findViewById(R.id.textView)
        }
    }

}