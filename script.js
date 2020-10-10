 function myFunction(){
  
    amount = 0;  
    rate = 80;
 
    var e = document.getElementById("bikes");
    var bike = e.options[e.selectedIndex];
    var pick = document.getElementById ("pickup").value;
    var dro = document.getElementById("drop").value;

    if(bike.value == 'act')
    {
      capacity = 5.3;
      bars = 7;
      fBar = 1.1;
      rBar = 0.71;
    
      if(pick == bars)
      {
          if(pick-dro == 1)
              amount = (pick - dro)*rBar* rate;
          else if(pick-dro >1)
              amount = fBar * rate + (pick-dro-1)*rBar*rate;
              if(amount>0){
                document.getElementById("output").style.color="green";
              }else{
              document.getElementById("output").style.color="red";
              }
              document.getElementById("output").innerHTML = "INR " + amount;  
      }
      else
      {
          amount = (pick - dro)*rBar*rate;
          if(amount>0){
            document.getElementById("output").style.color="green";
          }else{
          document.getElementById("output").style.color="red";
          }
          document.getElementById("output").innerHTML = "INR " + amount;
      }
    }
  else if(bike.value == "acti")
  {
    capacity = 5.3;
    bars = 8;
    fBar = 1.1;
    rBar = 0.61;
    if(pick == bars)
    {
        if(pick-dro == 1)
            amount = (pick - dro)*rBar* rate;

        else if(pick-dro >1)
            amount = fBar * rate + (pick-dro-1)*rBar*rate;
            if(amount>0){
                document.getElementById("output").style.color="green";
              }else{
              document.getElementById("output").style.color="red";
              }
            document.getElementById("output").innerHTML= "INR " + amount;
    
    }
    else
    {
        amount = (pick - dro)*rBar*rate;
        if(amount>0){
            document.getElementById("output").style.color="green";
          }else{
          document.getElementById("output").style.color="red";
          }
        document.getElementById("output").innerHTML = "INR " + amount;
    }
 }
 else if(bike.value == "avi")
 {
    capacity = 6;
    bars = 4;
    fBar = 1.2;
    rBar = 1.60;
    if(pick == bars)
    {
        if(pick-dro == 1)
            amount = (pick - dro)*rBar* rate;
        else if(pick-dro >1)
            amount = fBar * rate + (pick-dro-1)*rBar*rate;
            if(amount>0){
                document.getElementById("output").style.color="green";
              }else{
              document.getElementById("output").style.color="red";
              }
            document.getElementById("output").innerHTML = "INR " + amount;
    
    }
    else
    {
        amount = (pick - dro)*rBar*rate;
        if(amount>0){
            document.getElementById("output").style.color="green";
          }else{
          document.getElementById("output").style.color="red";
          }
        document.getElementById("output").innerHTML = "INR " + amount;
    }
 }
 else if(bike.value == "jup")
 {
    capacity = 5;
    bars = 15;
    fBar = 1.0;
    rBar = 0.29;
    if(pick == bars)
    {
        if(pick-dro == 1)
            amount = (pick - dro)*rBar* rate;
        else if(pick-dro >1)
            amount = fBar * rate + (pick-dro-1)*rBar*rate;
            if(amount>0){
                document.getElementById("output").style.color="green";
              }else{
              document.getElementById("output").style.color="red";
              }
            document.getElementById("output").innerHTML = "INR " + amount;
    
    }
    else
    {
        amount = (pick - dro)*rBar*rate;
        if(amount>0){
            document.getElementById("output").style.color="green";
          }else{
          document.getElementById("output").style.color="red";
          }
        document.getElementById("output").innerHTML = "INR " + amount;
    }
   }
 else if(bike.value == "mae")
 {
    capacity = 5.3;
    bars = 8;
    fBar = 1.1;
    rBar = 1.06;


    if(pick == bars)
    {
        if(pick-dro == 1)
            amount = (pick - dro)*rBar* rate;
        else if(pick-dro >1)
            amount = fBar * rate + (pick-dro-1)*rBar*rate;
            if(amount>0){
                document.getElementById("output").style.color="green";
              }else{
              document.getElementById("output").style.color="red";
              }
            document.getElementById("output").innerHTML = "INR " + amount;
    
    }
    else
    {
        amount = (pick - dro)*rBar*rate;
        if(amount>0){
            document.getElementById("output").style.color="green";
          }else{
          document.getElementById("output").style.color="red";
          }
        document.getElementById("output").innerHTML = "INR " + amount;

      }
   }       
    else if(bike.value =="acc")
    {
        capacity = 5.6;
        bars = 5;
        fBar = 1.1;
        rBar = 1.12;
    
    
        if(pick == bars)
        {
            if(pick-dro == 1)
                amount = (pick - dro)*rBar* rate;
            else if(pick-dro >1)
                amount = fBar * rate + (pick-dro-1)*rBar*rate;
                if(amount>0){
                    document.getElementById("output").style.color="green";
                  }else{
                  document.getElementById("output").style.color="red";
                  }
                document.getElementById("output").innerHTML = "INR " + amount;
        
        }
        else
        {
            amount = (pick - dro)*rBar*rate;
            if(amount>0){
                document.getElementById("output").style.color="green";
              }else{
              document.getElementById("output").style.color="red";
              }
            document.getElementById("output").innerHTML = "INR " + amount;
    
          }
        }

    else if(bike.value=="hf")
  {
    capacity = 9.5;
    bars = 7;
    fBar = 1.9;
    rBar = 1.27;


    if(pick == bars)
    {
        if(pick-dro == 1)
            amount = (pick - dro)*rBar* rate;
        else if(pick-dro >1)
            amount = fBar * rate + (pick-dro-1)*rBar*rate;
            if(amount>0){
                document.getElementById("output").style.color="green";
              }else{
              document.getElementById("output").style.color="red";
              }
            document.getElementById("output").innerHTML = "INR " + amount;
    
    }
    else
    {
        amount = (pick - dro)*rBar*rate;
        if(amount>0){
            document.getElementById("output").style.color="green";
          }else{
          document.getElementById("output").style.color="red";
          }
        document.getElementById("output").innerHTML = "INR " + amount;

      }
    }
    else if(bike.value=="ct")
  {
    capacity = 10;
    bars = 8;
    fBar = 2.0;
    rBar = 1.14;


    if(pick == bars)
    {
        if(pick-dro == 1)
            amount = (pick - dro)*rBar* rate;
        else if(pick-dro >1)
            amount = fBar * rate + (pick-dro-1)*rBar*rate;
            if(amount>0){
                document.getElementById("output").style.color="green";
              }else{
              document.getElementById("output").style.color="red";
              }
            document.getElementById("output").innerHTML = "INR " + amount;
    
    }
    else
    {
        amount = (pick - dro)*rBar*rate;
        if(amount>0){
            document.getElementById("output").style.color="green";
          }else{
          document.getElementById("output").style.color="red";
          }
        document.getElementById("output").innerHTML = "INR " + amount;

      }
    }
    else if(bike.value =="fzs")
 {
    capacity = 13;
    bars = 6;
    fBar = 2.6;
    rBar = 2.08;


    if(pick == bars)
    {
        if(pick-dro == 1)
            amount = (pick - dro)*rBar* rate;
        else if(pick-dro >1)
            amount = fBar * rate + (pick-dro-1)*rBar*rate;
            if(amount>0){
                document.getElementById("output").style.color="green";
              }else{
              document.getElementById("output").style.color="red";
              }
            document.getElementById("output").innerHTML = "INR " + amount;
    
    }
    else
    {
        amount = (pick - dro)*rBar*rate;
        if(amount>0){
            document.getElementById("output").style.color="green";
          }else{
          document.getElementById("output").style.color="red";
          }
        document.getElementById("output").innerHTML = "INR " + amount;

      }
    }
    else if(bike.value =="aveng")
    {
        capacity = 13;
        bars = 6;
        fBar = 2.6;
        rBar = 2.08;
    
    
        if(pick == bars)
        {
            if(pick-dro == 1)
                amount = (pick - dro)*rBar* rate;
            else if(pick-dro >1)
                amount = fBar * rate + (pick-dro-1)*rBar*rate;
                if(amount>0){
                    document.getElementById("output").style.color="green";
                  }else{
                  document.getElementById("output").style.color="red";
                  }
                document.getElementById("output").innerHTML = "INR " + amount;
        
        }
        else
        {
            amount = (pick - dro)*rBar*rate;
            if(amount>0){
                document.getElementById("output").style.color="green";
              }else{
              document.getElementById("output").style.color="red";
              }
            document.getElementById("output").innerHTML = "INR" + amount;
    
          }
        }
      


        
 }
