const EditorData: Record<string, string> = {
  profile: `class Person
  attr_accessor: :name, :age, :skills

  def initialize(name, age, skills)
    @name, @age, @skills = name, age, skills
  end

  def greetings
    "Hi! My name is #{name}."
  end

  def profile

  end
end
`,
  skills: `skills code`,
  products: `require "catpix"

  class Product
    attr_accessor :title, :image, :backend, :frontend, :description

    def initialize(title:, image:, backend:, frontend:, description:)
      @title = title
      @image = image
      @backend = backend
      @frontend = frontend
      @description = description
    end

    def display
      puts "title: #{@title}"
      print_image
      puts "backend: #{@backend}"
      puts "frontend: #{@frontend}"
      puts "description: #{@description}"
    end

    private
      def print_image
        Catpix::print_image @image,
          limit_x: 1.0,
          limit_y: 0,
          center_x: true,
          center_y: true,
          bg: "white",
          bg_fill: true,
          resolution: "high"
      end


  end

  twesume = Product.new(title: "TWESUME ~ みんなのTwitter履歴書 ~",
    image: "/Users/shun/downloads/birds.png",
    backend: ["Rails", "Heroku"],
    frontend: ["jQuery", "Bootstrap", "html2canvas"],
    description: "ポートフォリオでアピールするTwitter転職支援サービス")

  draftbox = Product.new(title: "DraftBox",
    image: "/Users/shun/downloads/birds.png",
    backend: ["Rails", "Heroku"],
    frontend: ["jQuery", "Marked.js"],
    description: "オンラインMarkdownメモサービス")

  products = [twesume, draftbox]

  products.each do |product|
    product.display
  end
  `,
  blog: `blog code`,
  contact: `contact code`,
};

export default EditorData;

