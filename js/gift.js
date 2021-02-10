function showMessageForIdDuc(){
    var id = document.getElementById("duc");
    id.innerHTML = "<span style = 'font-Weight: 800;'>Name:</span> Nguyễn Dương Minh Đức<br><span style = 'font-Weight: 800;'>Age:</span 20<br><span style = 'font-Weight: 800;'>Gender:</span> Male<br><span style = 'font-Weight: 800;'>Address:</span> 529 Tô Ký, P.Trung Mỹ Tây, Q12<br><span style = 'font-Weight: 800;'>PhoneNumber:</span> 0879496314<br><span style = 'font-Weight: 800;'>Chức vụ:</span> Bạn trai nhỏ bên kia !<br><span style = 'font-Weight: 800;'>Đôi lời muốn nói:</span> Anh yêu em nhiều lắm moah moah.";
    id.style.lineHeight = "2rem";
    id.style.fontSize = "1.8rem";
    id.style.fontFamily = "niconne,san-serifs";
    id.style.fontWeight = "500";
    id.style.padding = "10px 10px"
    id.style.backgroundColor = "#6495ED";
    id.style.backgroundImage = "url('')";
}

function showMessageForIdLinh(){
    var id = document.getElementById("Linh");
    id.innerHTML = "<span style = 'font-Weight: 800;'>Name:</span> Bùi Nhất Linh<br><span style = 'font-Weight: 800;'>Age:</span> 20<br><span style = 'font-Weight: 800;'>Gender:</span> FeMale<br><span style = 'font-Weight: 800;'>Address:</span> 89/2c Lê Văn Khương, P.Hiệp Thành, Q12<br><span style = 'font-Weight: 800;'>PhoneNumber:</span> 0938766419<br><span style = 'font-Weight: 800;'>Chức vụ:</span> Bạn gái thằng bên kia !<br><span style = 'font-Weight: 800;'>Đôi lời muốn nói:</span> Bé yêu anh lắm luôn ó,Bé còn nhớ a<br>cực cực kì nhiều lun.";
    id.style.lineHeight = "2rem";
    id.style.fontSize = "1.8rem";
    id.style.fontFamily = "niconne,san-serifs";
    id.style.fontWeight = "500";
    id.style.padding = "10px 10px"
    id.style.backgroundColor = "#6495ED";
    id.style.backgroundImage = "url('')";
    id.style.margin = "0 0 29px";
}

function unDoForIdDuc(){
    var id = document.getElementById("duc");
    id.style.backgroundImage = "url(" + './img/ducimage.jpg'+ ")";
    id.style.backgroundSize = "cover";
    id.innerHTML = "<span style = 'opacity: 0;'>asfasfasfasfsfasfasfas<br><br><br><br><br><br><br><br>";
    
}

function unDoForIdLinh(){
    var id = document.getElementById("Linh");
    id.style.backgroundImage = "url(" + './img/linhImage.jpg'+ ")";
    id.style.backgroundSize = "cover";
    id.innerHTML = "<span style = 'opacity: 0;'>asfasfasfasfsfasfasfas<br><br><br><br><br><br><br><br>";
}
