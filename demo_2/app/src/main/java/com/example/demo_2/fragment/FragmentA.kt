package com.example.demo_2.fragment

import android.content.Context
import androidx.databinding.DataBindingUtil
import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.EditText
import com.example.demo_2.R
import com.example.demo_2.databinding.FragmentABinding

// TODO: Rename parameter arguments, choose names that match
// the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
//private const val ARG_PARAM1 = "param1"
//private const val ARG_PARAM2 = "param2"

/**
 * A simple [Fragment] subclass.
 * Activities that contain this fragment must implement the
 * [FragmentA.OnFragmentInteractionListener] interface
 * to handle interaction events.
 * Use the [FragmentA.newInstance] factory method to
 * create an instance of this fragment.
 *
 */
class FragmentA : androidx.fragment.app.Fragment() {
    // TODO: Rename and change types of parameters
    private var param1: String? = null
    private var param2: String? = null
    private var listener: OnFragmentInteractionListener? = null

    private lateinit var editText: EditText
    private lateinit var buttonOk: Button

//    private lateinit var listenerA:FragmentAListener


    private lateinit var binding: FragmentABinding


    //
//    override fun onCreate(savedInstanceState: Bundle?) {
//        super.onCreate(savedInstanceState)
//        arguments?.let {
//            param1 = it.getString(ARG_PARAM1)
//            param2 = it.getString(ARG_PARAM2)
//        }
//
//
//    }


    //view
    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?,
                              savedInstanceState: Bundle?): View? {
//        return TextView(activity).apply {
//            setText(R.string.hello_blank_fragment)
//        }

        binding = DataBindingUtil.inflate(inflater, R.layout.fragment_a, container, false)

        buttonOk = binding.buttonOkA
        editText = binding.editTextA

        binding.buttonOkA.setOnClickListener {

            var input: CharSequence = editText.text

            println("$input" + "fragment_a")
            listener!!.onInputASent(input)
            println( "fragment_a")
        }
//        buttonOk.setOnClickListener {
//            @Override
//            fun onClick() {
//                var input: CharSequence = editText.text
//
//                println("$input" + "fragment_a")
//                listener!!.onInputASent(input)
//            }
//        }

        return binding.root

//        return inflater.inflate(R.layout.fragment_a, container, false)
    }


    public fun updateEditText(newText: CharSequence) {
        editText.setText(newText)
    }

    // TODO: Rename method, update argument and hook method into UI event
//    fun onButtonPressed(uri: Uri) {
//        listener.onFragmentAInteraction(uri)
//    }

    override fun onAttach(context: Context) {
        super.onAttach(context)


        if (context is OnFragmentInteractionListener) {
            listener = context
        } else {
            throw RuntimeException(context.toString() + " must implement OnFragmentInteractionListener")
        }

    }

    override fun onDetach() {
        super.onDetach()
        listener = null
    }


    /**
     * This interface must be implemented by activities that contain this
     * fragment to allow an interaction in this fragment to be communicated
     * to the activity and potentially other fragments contained in that
     * activity.
     *
     *
     * See the Android Training lesson [Communicating with Other Fragments]
     * (http://developer.android.com/training/basics/fragments/communicating.html)
     * for more information.
     */
    interface OnFragmentInteractionListener {
        // TODO: Update argument type and name
//        fun onFragmentAInteraction(uri: Uri)

        fun onInputASent(input: CharSequence)
    }

//    interface FragmentAListener{
//        fun onInputASent(input:CharSequence)
//    }

//    companion object {
//        /**
//         * Use this factory method to create a new instance of
//         * this fragment using the provided parameters.
//         *
//         * @param param1 Parameter 1.
//         * @param param2 Parameter 2.
//         * @return A new instance of fragment FragmentA.
//         */
//        // TODO: Rename and change types and number of parameters
//        @JvmStatic
//        fun newInstance(param1: String, param2: String) =
//                FragmentA().apply {
//                    arguments = Bundle().apply {
//                        putString(ARG_PARAM1, param1)
//                        putString(ARG_PARAM2, param2)
//                    }
//                }
//    }
}
