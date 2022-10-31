let choose_style = document.querySelectorAll(".gradiant_style")
let gradiant_direction_buttons = document.querySelectorAll(".gradiant_direction_btn")
let radial_center_direction_btn = document.querySelector(".radial_center")
let first_color_input = document.getElementById("first_color_input")
let second_color_input = document.getElementById("second_color_input")
let output_container = document.querySelector(".right_container")
let get_css_btn = document.getElementById("get_css")
let set_gradiant_style
let set_gradiant_direction
let set_first_color
let set_second_color
let output_gradiant

// change_data
change_css=()=>{
    output_container.style.background = `${set_gradiant_style}(${set_gradiant_direction},${set_first_color},${set_second_color})`
    output_gradiant = output_container.style.background
}

// choose_gradiant_style means radial or linear
choose_style.forEach((choose_style)=>{
    choose_style.addEventListener("click",()=>{
        if (choose_style.value === "Linear") {
            radial_center_direction_btn.style.display = `${"none"}`
            set_gradiant_style = `${"linear-gradient"}`
            linear_gradiant_direction()
        } else {
            radial_center_direction_btn.style.display = `${"block"}`
            set_gradiant_style =`${"-webkit-radial-gradient"}`
            radial_gradiant_direction()
        }
    })
})
// set linear_gradiant_direction
linear_gradiant_direction=()=>{
    gradiant_direction_buttons.forEach((direction_btns)=>{
        direction_btns.addEventListener("click",()=>{
            set_gradiant_direction = direction_btns.value
            change_css();
        })
    })
}
// set radials_gradiant_direction
radial_gradiant_direction=()=>{
    gradiant_direction_buttons.forEach((direction_btns)=>{
        direction_btns.addEventListener("click",()=>{
            set_gradiant_direction = direction_btns.id
            change_css()
        })
    })
}
// choose_color
first_color_input.addEventListener("change",()=>{
    set_first_color = first_color_input.value
    change_css()
})
second_color_input.addEventListener("change",()=>{
    set_second_color = second_color_input.value
    change_css()
})

// copy_to_clipboard
get_css_btn.addEventListener("click",()=>{
    let create_textarea = document.createElement("textarea")
    create_textarea.value = output_gradiant
    document.body.appendChild(create_textarea)
    create_textarea.select()         // using .select() we can able to select text
    document.execCommand("copy")    // using .execcommand() we can able to forcefully run a command like:-(copy,paste) on document
    create_textarea.style.display = ("none")
    document.body.removeChild(create_textarea)
    
})

