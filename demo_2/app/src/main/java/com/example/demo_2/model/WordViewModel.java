package com.example.demo_2.model;

import android.app.Application;
import androidx.lifecycle.AndroidViewModel;
import androidx.lifecycle.LiveData;
import androidx.annotation.NonNull;

import com.example.demo_2.entity.Word;
import com.example.demo_2.repository.WordRepository;

import java.util.List;


public class WordViewModel extends AndroidViewModel {

    private WordRepository mRepository;

    private LiveData<List<Word>> mAllWords;

    public WordViewModel(@NonNull Application application) {
        super(application);

        mRepository = new WordRepository(application);
        mAllWords = mRepository.getMAllWords();

    }


    //对于UI就完全透明
    public void insert(Word word) {
        mRepository.insert(word);
    }

    //隐藏了对UI的实现
    public WordRepository getmRepository() {
        return mRepository;
    }

    public LiveData<List<Word>> getmAllWords() {
        return mAllWords;
    }
}
