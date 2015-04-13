class Ninja
  def initialize(x, y)
    @x = x
    @y = y
  end

  def move
    @x += 5
  end

  def self.shout
    "KIAI"
  end
end