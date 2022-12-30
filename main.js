


  function selectOnlyThis(id) {
    for (var i = 1;i <= 3; i++)
    {
        document.getElementById("sweetness" + i).checked = false;
    }
    document.getElementById(id).checked = true;
}