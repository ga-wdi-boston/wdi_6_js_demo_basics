def method_name
  x = 2
  $y = 3
    return true
  end

  #puts x # Error because x has a method or a local scope
  method_name
  puts $y # works (returns 3) because $y has global scope
