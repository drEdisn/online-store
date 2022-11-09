export const productsPage = `
  <div class="title-block">
    <div class="container title-block__container">
      <h1 class="title">Products</h1>
    </div>
  </div>
  <div class="container">
    <div class="content">
      <div class="filters">
        <form class="form">
          <div class="search-content">
            <label class="clear-search" for="search"></label>
            <input class="search" id="search" type="text" placeholder="Search" autocomplete="off" autofocus>
          </div>
          <div class="category">
            <h5 class="subtitle">Category</h5>
            <button class="category__item _active">All</button>
            <button class="category__item">Office</button>
            <button class="category__item">Living Room</button>
            <button class="category__item">Kitchen</button>
            <button class="category__item">Bedroom</button>
            <button class="category__item">Dining</button>
            <button class="category__item">Kids</button>
          </div>
          <div class="company">
            <h5 class="subtitle">Company</h5>
            <select class="select company__select" name="company">
              <option value="all">All</option>
              <option value="marcos">Marcos</option>
              <option value="ikea">Ikea</option>
              <option value="liddy">Liddy</option>
              <option value="caressa">Caressa</option>
            </select>
          </div>
          <div class="colors">
            <h5 class="subtitle">Colors</h5>
            <div class="colors__button">
              <button class="colors__item" data-color="">All</button>
              <button class="colors__item red" data-color="red"><svg class="done" xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 2 20 20"><path d="M8.333 13.729 5 10.396l1.062-1.063 2.271 2.271L13.938 6 15 7.062Z"/></svg></button>
              <button class="colors__item green" data-color="green"><svg class="done" xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 2 20 20"><path d="M8.333 13.729 5 10.396l1.062-1.063 2.271 2.271L13.938 6 15 7.062Z"/></svg></button>
              <button class="colors__item blue" data-color="blue"><svg class="done" xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 2 20 20"><path d="M8.333 13.729 5 10.396l1.062-1.063 2.271 2.271L13.938 6 15 7.062Z"/></svg></button>
              <button class="colors__item black" data-color="black"><svg class="done" xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 2 20 20"><path d="M8.333 13.729 5 10.396l1.062-1.063 2.271 2.271L13.938 6 15 7.062Z"/></svg></button>
              <button class="colors__item yellow" data-color="yellow"><svg class="done" xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 2 20 20"><path d="M8.333 13.729 5 10.396l1.062-1.063 2.271 2.271L13.938 6 15 7.062Z"/></svg></button>
            </div>
          </div>
          <div class="price">
            <h5 class="subtitle">Price</h5>
            <div class="price__line">
              <p class="price__start">$0</p>
              <p class="price__end">$3100</p>
            </div>
            <div class="slider"></div>
          </div>
          <div class="amount">
            <h5 class="subtitle">Amount</h5>
            <div class="amount__line">
              <p class="amount__start">0</p>
              <p class="amount__end">21</p>
            </div>
            <div class="slider-amount"></div>
          </div>
          <div class="popular">
            <label for="popular">Popular</label>
            <input class="popular-check" id="popular" type="checkbox">
          </div>
          <button class="reset filter-reset">Reset filters</button>
          <button class="reset local-reset">Reset Local</button>
        </form>
      </div>
      <div class="products">
        <div class="products__setting">
          <div class="view-switchers">
            <svg class="view" xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="2 2 15 15"><path d="M5.562 15.833q-.562 0-.979-.416-.416-.417-.416-1 0-.584.416-.99.417-.406 1-.406.584 0 .99.417.406.416.406 1 0 .562-.417.979-.416.416-1 .416Zm4.438 0q-.583 0-.99-.416-.406-.417-.406-1 0-.584.406-.99.407-.406.99-.406t1 .417q.417.416.417 1 0 .562-.417.979-.417.416-1 .416Zm4.417 0q-.563 0-.979-.416-.417-.417-.417-1 0-.584.417-.99.416-.406 1-.406.583 0 .989.417.406.416.406 1 0 .562-.416.979-.417.416-1 .416Zm-8.855-4.437q-.562 0-.979-.406-.416-.407-.416-.99t.416-1q.417-.417 1-.417.584 0 .99.417t.406 1q0 .583-.417.99-.416.406-1 .406Zm4.438 0q-.583 0-.99-.406-.406-.407-.406-.99t.406-1q.407-.417.99-.417T11 9q.417.417.417 1t-.417.99q-.417.406-1 .406Zm4.417 0q-.563 0-.979-.406-.417-.407-.417-.99t.417-1q.416-.417 1-.417.583 0 .989.417t.406 1q0 .583-.416.99-.417.406-1 .406ZM5.562 6.979q-.562 0-.979-.416-.416-.417-.416-1.001 0-.583.416-.989.417-.406 1-.406.584 0 .99.416.406.417.406 1 0 .563-.417.98-.416.416-1 .416Zm4.438 0q-.583 0-.99-.416-.406-.417-.406-1.001 0-.583.406-.989.407-.406.99-.406t1 .416q.417.417.417 1 0 .563-.417.98-.417.416-1 .416Zm4.417 0q-.563 0-.979-.416-.417-.417-.417-1.001 0-.583.417-.989.416-.406 1-.406.583 0 .989.416.406.417.406 1 0 .563-.416.98-.417.416-1 .416Z"/></svg>
            <svg class="view" xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="2 2 15 15"><path d="M3.167 14.375v-1.396h13.687v1.396Zm0-3.687V9.292h13.687v1.396Zm0-3.667V5.625h13.687v1.396Z"/></svg>
          </div>
          <hr>
          <div class="products__sort">
            <p class="sort-text">Sort by</p>
            <select class="select sort-select" name="sort">
              <option value="auto">Auto</option>
              <option value="az">Name (A-Z)</option>
              <option value="za">Name (Z-A)</option>
              <option value="increasing">Amount (increasing)</option>
              <option value="decreasing">Amount (decreasing)</option>
            </select>
          </div>
        </div>
        <div class="products__container">
          
        </div>
      </div>
    </div>
  </div>
`;